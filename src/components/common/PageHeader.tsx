import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  style?: React.CSSProperties;
}

const PageHeader = ({ title, subtitle, bgImage, style }: PageHeaderProps) => {
  return (
    <div
      className={`relative py-20 px-4 ${bgImage ? "bg-cover bg-center" : ""}`}
      style={{
        ...style,
        ...(bgImage ? { backgroundImage: `url(${bgImage})` } : {}),
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container mx-auto relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
