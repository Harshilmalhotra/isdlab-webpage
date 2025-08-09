import DarkVeil from '@/components/DarkVeil';

export default function TestPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <DarkVeil
                    hueShift={5}             // shifts hue by 45 degrees
                    noiseIntensity={0}      // adds a bit of grain
                    scanlineIntensity={0}   // subtle scanlines
                    speed={1}               // animation speed
                    scanlineFrequency={0}     // frequency of scanlines
                    warpAmount={2}          // mild warp distortion
                    resolutionScale={1}     // render at higher resolution
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white">Test Page</h1>
                </div>
            </div>
        </div>
    );
}
