import Image from "next/image";

export function ClarkLogo() {
  return (
    <div className="flex items-center">
      <Image
        src="/images/clark-logo.png"
        alt="Clark Wire & Cable"
        width={180}
        height={50}
        priority
      />
    </div>
  );
}
