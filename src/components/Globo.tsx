import React, { useEffect, useRef } from 'react';

const BabyShowerBalloon: React.FC = () => {
    const balloonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Generate random dots on balloon
        const dotsContainer = document.getElementById('dots');
        if (!dotsContainer) return;

        const dotPositions = [
            { top: '12%', left: '18%' },
            { top: '12%', right: '18%' },
            { top: '20%', left: '12%' },
            { top: '20%', right: '12%' },
            { top: '28%', left: '22%' },
            { top: '28%', right: '22%' },
            { top: '36%', left: '15%' },
            { top: '36%', right: '15%' },
            { top: '44%', left: '25%' },
            { top: '44%', right: '25%' },
            { top: '60%', left: '18%' },
            { top: '60%', right: '18%' },
            { top: '68%', left: '28%' },
            { top: '68%', right: '28%' },
            { top: '76%', left: '22%' },
            { top: '76%', right: '22%' },
            { top: '84%', left: '32%' },
            { top: '84%', right: '32%' },
        ];

        dotPositions.forEach((pos) => {
            const dot = document.createElement('div');
            dot.className = 'absolute w-[10px] h-[10px] rounded-full opacity-40';
            dot.style.background = 'radial-gradient(circle at 30% 30%, white, rgba(255, 255, 255, 0.6))';
            dot.style.boxShadow = '0 2px 4px rgba(255, 255, 255, 0.2)';
            Object.assign(dot.style, pos);
            dotsContainer.appendChild(dot);
        });

        // Add interactive mouse effects
        const handleMouseMove = (e: MouseEvent) => {
            if (!balloonRef.current) return;
            const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
            const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
            balloonRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#e8f0f7] via-[#d8e8f5] to-[#e0e9f2]">
            {/* Decorative Stars */}
            <svg
                className="absolute opacity-30 w-[60px] h-[60px] top-[15%] left-[25%] animate-twinkle"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#b8c9d8"
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                />
            </svg>
            <svg
                className="absolute opacity-30 w-[50px] h-[50px] top-[35%] left-[15%] animate-twinkle"
                style={{ animationDelay: '1s' }}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#b8c9d8"
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                />
            </svg>
            <svg
                className="absolute opacity-30 w-[45px] h-[45px] top-[25%] right-[20%] animate-twinkle"
                style={{ animationDelay: '2s' }}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#b8c9d8"
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                />
            </svg>

            {/* Floating Clouds */}
            <div className="absolute w-[100px] h-[50px] bg-white rounded-[50%] bottom-[20%] -left-[150px] opacity-80 blur-[1px] animate-floatCloud">
                <div className="absolute w-[50px] h-[50px] bg-white rounded-[50%] top-[-25px] left-[15px]" />
                <div className="absolute w-[70px] h-[45px] bg-white rounded-[50%] top-[-20px] right-[15px]" />
            </div>
            <div className="absolute w-[80px] h-[40px] bg-white rounded-[50%] bottom-[45%] -left-[120px] opacity-80 blur-[1px] animate-floatCloud2">
                <div className="absolute w-[45px] h-[45px] bg-white rounded-[50%] top-[-20px] left-[10px]" />
                <div className="absolute w-[55px] h-[38px] bg-white rounded-[50%] top-[-15px] right-[12px]" />
            </div>
            <div className="absolute w-[90px] h-[45px] bg-white rounded-[50%] bottom-[65%] -left-[130px] opacity-80 blur-[1px] animate-floatCloud3">
                <div className="absolute w-[50px] h-[50px] bg-white rounded-[50%] top-[-23px] left-[12px]" />
                <div className="absolute w-[60px] h-[42px] bg-white rounded-[50%] top-[-18px] right-[10px]" />
            </div>
            <div className="absolute w-[110px] h-[48px] bg-white rounded-[50%] bottom-[30%] -left-[140px] opacity-80 blur-[1px] animate-floatCloud4">
                <div className="absolute w-[55px] h-[55px] bg-white rounded-[50%] top-[-26px] left-[18px]" />
                <div className="absolute w-[65px] h-[48px] bg-white rounded-[50%] top-[-22px] right-[15px]" />
            </div>
            <div className="absolute w-[75px] h-[38px] bg-white rounded-[50%] bottom-[55%] -left-[100px] opacity-80 blur-[1px] animate-floatCloud5">
                <div className="absolute w-[40px] h-[40px] bg-white rounded-[50%] top-[-18px] left-[8px]" />
                <div className="absolute w-[48px] h-[35px] bg-white rounded-[50%] top-[-14px] right-[8px]" />
            </div>

            {/* Hot Air Balloon */}
            <div ref={balloonRef} className="relative z-[2] animate-floatBalloon drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
                <div className="relative w-[300px] h-[360px]">
                    {/* Balloon Top */}
                    <div className="relative w-[300px] h-[340px] rounded-[50%_50%_48%_48%/60%_60%_40%_40%] overflow-hidden shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.15),inset_20px_20px_40px_rgba(255,255,255,0.1)]"
                        style={{
                            background: 'radial-gradient(ellipse at 30% 30%, #9ac9dc 0%, #7db3c9 30%, #5a99b8 60%, #4a8ca8 100%)',
                        }}
                    >
                        {/* Balloon Segments */}
                        <div className="absolute w-full h-full top-0 left-0">
                            <div className="absolute w-[33.33%] h-full left-0 rounded-[50%/60%_60%_40%_40%]"
                                style={{
                                    clipPath: 'ellipse(50% 100% at 0% 50%)',
                                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 20%, transparent 40%, transparent 60%, rgba(0, 0, 0, 0.05) 80%, rgba(0, 0, 0, 0.1) 100%)',
                                }}
                            />
                            <div className="absolute w-[33.33%] h-full left-[33.33%] opacity-50"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 20%, transparent 40%, transparent 60%, rgba(0, 0, 0, 0.05) 80%, rgba(0, 0, 0, 0.1) 100%)',
                                }}
                            />
                            <div className="absolute w-[33.33%] h-full right-0 rounded-[50%/60%_60%_40%_40%]"
                                style={{
                                    clipPath: 'ellipse(50% 100% at 100% 50%)',
                                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 20%, transparent 40%, transparent 60%, rgba(0, 0, 0, 0.05) 80%, rgba(0, 0, 0, 0.1) 100%)',
                                }}
                            />
                        </div>

                        {/* Balloon Pattern */}
                        <div className="absolute w-full h-full">
                            {/* Wave Band */}
                            <div className="absolute w-[110%] h-[50px] left-[-5%] top-1/2 -translate-y-1/2 bg-white opacity-25"
                                style={{
                                    clipPath: "path('M 0 25 Q 75 15, 150 25 T 300 25 L 300 30 Q 225 40, 150 30 T 0 30 Z')",
                                }}
                            >
                                <div className="absolute w-full h-[3px] top-0 bg-white opacity-40"
                                    style={{
                                        clipPath: "path('M 0 2 Q 75 0, 150 2 T 300 2 L 300 3 Q 225 5, 150 3 T 0 3 Z')",
                                    }}
                                />
                                <div className="absolute w-full h-[3px] bottom-0 bg-white opacity-40"
                                    style={{
                                        clipPath: "path('M 0 1 Q 75 3, 150 1 T 300 1 L 300 2 Q 225 0, 150 2 T 0 2 Z')",
                                    }}
                                />
                            </div>

                            {/* Dots Container */}
                            <div id="dots" className="absolute w-full h-full" />
                        </div>
                    </div>

                    {/* Balloon Bottom */}
                    <div className="relative w-[80px] h-[35px] -mt-[8px] mx-auto rounded-[0_0_40%_40%/0_0_100%_100%] shadow-[inset_0_-5px_10px_rgba(0,0,0,0.2),0_5px_10px_rgba(0,0,0,0.1)]"
                        style={{
                            background: 'linear-gradient(to bottom, #5a99b8 0%, #4a8ca8 100%)',
                        }}
                    >
                        {/* Strings */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[100px]">
                            <div className="absolute top-0 left-[10px] w-[2px] h-[80px] origin-top rotate-[-8deg]"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(139, 160, 174, 0.6), rgba(139, 160, 174, 0.3))',
                                }}
                            />
                            <div className="absolute top-0 left-[25px] w-[2px] h-[80px] origin-top rotate-[-3deg]"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(139, 160, 174, 0.6), rgba(139, 160, 174, 0.3))',
                                }}
                            />
                            <div className="absolute top-0 right-[25px] w-[2px] h-[80px] origin-top rotate-[3deg]"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(139, 160, 174, 0.6), rgba(139, 160, 174, 0.3))',
                                }}
                            />
                            <div className="absolute top-0 right-[10px] w-[2px] h-[80px] origin-top rotate-[8deg]"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(139, 160, 174, 0.6), rgba(139, 160, 174, 0.3))',
                                }}
                            />
                        </div>
                    </div>

                    {/* Basket */}
                    <div className="relative w-[85px] h-[65px] mt-[80px] mx-auto rounded-[6px] shadow-[0_8px_15px_rgba(0,0,0,0.3),inset_0_2px_5px_rgba(255,255,255,0.2),inset_0_-2px_5px_rgba(0,0,0,0.2)]"
                        style={{
                            background: 'linear-gradient(135deg, #c4a88a 0%, #a08d7a 50%, #8a7867 100%)',
                        }}
                    >
                        {/* Basket Weave Pattern */}
                        <div className="absolute w-full h-full rounded-[6px]"
                            style={{
                                backgroundImage: `
                  repeating-linear-gradient(90deg, transparent 0px, transparent 7px, rgba(0, 0, 0, 0.15) 7px, rgba(0, 0, 0, 0.15) 8px),
                  repeating-linear-gradient(0deg, transparent 0px, transparent 7px, rgba(0, 0, 0, 0.15) 7px, rgba(0, 0, 0, 0.15) 8px)
                `,
                            }}
                        />
                        {/* Basket Top Rim */}
                        <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-[90%] h-[8px] rounded-[20%_20%_0_0] shadow-[0_-2px_5px_rgba(0,0,0,0.2)]"
                            style={{
                                background: 'linear-gradient(to bottom, #8a7867, #a08d7a)',
                            }}
                        />
                        {/* Basket Shadow */}
                        <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-[95%] h-[5px] bg-black/30 rounded-[50%] blur-[3px]" />
                    </div>
                </div>
            </div>

            {/* Static Bottom Clouds */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] z-[1] pointer-events-none">
                {/* Cloud 1 */}
                <div className="absolute w-[200px] h-[100px] bg-white rounded-[50%] bottom-[-30px] left-[-50px] opacity-90 blur-[2px]">
                    <div className="absolute w-[100px] h-[100px] bg-white rounded-[50%] top-[-50px] left-[30px]" />
                    <div className="absolute w-[140px] h-[90px] bg-white rounded-[50%] top-[-40px] right-[30px]" />
                </div>

                {/* Cloud 2 */}
                <div className="absolute w-[180px] h-[90px] bg-white rounded-[50%] bottom-[-20px] left-[15%] opacity-90 blur-[2px]">
                    <div className="absolute w-[90px] h-[90px] bg-white rounded-[50%] top-[-45px] left-[25px]" />
                    <div className="absolute w-[120px] h-[80px] bg-white rounded-[50%] top-[-35px] right-[25px]" />
                </div>

                {/* Cloud 3 */}
                <div className="absolute w-[220px] h-[110px] bg-white rounded-[50%] bottom-[-40px] left-[35%] opacity-90 blur-[2px]">
                    <div className="absolute w-[110px] h-[110px] bg-white rounded-[50%] top-[-55px] left-[35px]" />
                    <div className="absolute w-[150px] h-[100px] bg-white rounded-[50%] top-[-45px] right-[35px]" />
                </div>

                {/* Cloud 4 */}
                <div className="absolute w-[190px] h-[95px] bg-white rounded-[50%] bottom-[-25px] right-[20%] opacity-90 blur-[2px]">
                    <div className="absolute w-[95px] h-[95px] bg-white rounded-[50%] top-[-48px] left-[28px]" />
                    <div className="absolute w-[130px] h-[85px] bg-white rounded-[50%] top-[-38px] right-[28px]" />
                </div>

                {/* Cloud 5 */}
                <div className="absolute w-[210px] h-[105px] bg-white rounded-[50%] bottom-[-35px] right-[-40px] opacity-90 blur-[2px]">
                    <div className="absolute w-[105px] h-[105px] bg-white rounded-[50%] top-[-52px] left-[32px]" />
                    <div className="absolute w-[145px] h-[95px] bg-white rounded-[50%] top-[-42px] right-[32px]" />
                </div>

                {/* Cloud 6 */}
                <div className="absolute w-[170px] h-[85px] bg-white rounded-[50%] bottom-[-15px] left-1/2 -translate-x-1/2 opacity-90 blur-[2px]">
                    <div className="absolute w-[85px] h-[85px] bg-white rounded-[50%] top-[-43px] left-[22px]" />
                    <div className="absolute w-[115px] h-[75px] bg-white rounded-[50%] top-[-33px] right-[22px]" />
                </div>
            </div>

            <style >{`
        @keyframes floatBalloon {
          0%, 100% {
            transform: translateY(0) rotate(-2deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes floatCloud {
          from {
            left: -150px;
          }
          to {
            left: 110%;
          }
        }

        .animate-floatBalloon {
          animation: floatBalloon 6s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }

        .animate-floatCloud {
          animation: floatCloud 20s linear infinite;
        }

        .animate-floatCloud2 {
          animation: floatCloud 25s linear infinite;
          animation-delay: 5s;
        }

        .animate-floatCloud3 {
          animation: floatCloud 30s linear infinite;
          animation-delay: 10s;
        }

        .animate-floatCloud4 {
          animation: floatCloud 28s linear infinite;
          animation-delay: 15s;
        }

        .animate-floatCloud5 {
          animation: floatCloud 35s linear infinite;
          animation-delay: 20s;
        }

        @media (max-width: 1024px) {
          .balloon-container {
            transform: scale(0.85);
          }
        }

        @media (max-width: 768px) {
          .balloon-container {
            transform: scale(0.7);
          }
        }
      `}</style>
        </div>
    );
};

export default BabyShowerBalloon;