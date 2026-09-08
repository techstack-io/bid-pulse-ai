import Image from "next/image";

export function ClarkLogo() {
  return (
    <Image
      src="/images/clark-logo-header.png"
      alt="Clark Wire & Cable"
      width={240}
      height={62}
      className="h-auto w-[200px]"
      priority
    />
  );
}
