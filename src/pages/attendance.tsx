export default function Attendance() {
    return (
      <div className="bg-black text-white w-screen h-screen">
        <iframe
          src="https://isd-attendance.vercel.app/"
          className="w-full h-full"
          style={{ border: "none" }}
          title="Attendance"
        ></iframe>
      </div>
    );
  }