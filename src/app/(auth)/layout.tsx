import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage: `url("/bg-1.jpg")`,
        }}>
        {/* Radial blur overlay */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.25)_0%,_rgba(255,255,255,0)_20%)] backdrop-blur-md" />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 w-full max-w-md px-4">{children}</div>
    </div>
  );
};

export default AuthLayout;
