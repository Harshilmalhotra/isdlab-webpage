import ProfileCard from '@/components/ProfileCard';

export default function TestPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            {/* <ProfileCard
        avatarUrl="people/hm.png"
        iconUrl="people/1.jpg"
        grainUrl="public/grain/1.png"
        // behindGradient={undefined}
        // innerGradient={undefined}
        // showBehindGradient={true}
        className=""
        enableTilt={true}
        enableMobileTilt={false}
        mobileTiltSensitivity={5}
        miniAvatarUrl={undefined}
        name="Harshil Malhotra"
        title="full-stack developer"
        handle="harshilmalhotra"
        status="Online"
        contactText="Contact Me"
        showUserInfo={true}
        onContactClick={() => console.log('Contact clicked')}
      /> */}



            <ProfileCard
             name="Harshil Malhotra"
                title="full-stack developer"
                handle="harshilmalhotra"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/people/hm.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
               onContactClick={() =>
          window.open('https://www.linkedin.com/in/harshilmalhotra/', '_blank')
        }
            />
        </div>
    );
}
