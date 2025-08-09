//src\pages\api\drive-images.ts

import type { NextApiRequest, NextApiResponse } from "next";

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink: string;
  webContentLink?: string;
}

interface ImageData {
  id: string;
  name: string;
  thumb: string;
  full: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
    const pageToken = req.query.pageToken as string | undefined;
    const pageSize = parseInt(req.query.limit as string) || 12;

    if (!folderId || !apiKey) {
      return res.status(500).json({ error: "Missing env variables" });
    }

    const q = `'${folderId}' in parents and mimeType contains 'image/' and trashed=false`;
    let url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
      q
    )}&key=${apiKey}&fields=files(id,name,mimeType,thumbnailLink,webContentLink),nextPageToken&pageSize=${pageSize}`;

    if (pageToken) {
      url += `&pageToken=${pageToken}`;
    }

    const r = await fetch(url);
    if (!r.ok) {
      return res.status(r.status).json({ error: await r.text() });
    }

    const data = (await r.json()) as { files: DriveFile[]; nextPageToken?: string };

    const images: ImageData[] = (data.files || []).map((f) => ({
      id: f.id,
      name: f.name,
      thumb: f.thumbnailLink,
      full: `/api/proxy?url=${encodeURIComponent(`https://drive.google.com/uc?export=view&id=${f.id}`)}`, // Proxy the full-resolution image
    }));

    console.log(images);

    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    res.status(200).json({ images, nextPageToken: data.nextPageToken || null });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
