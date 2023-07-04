import Image from 'next/image';

export default function ProfilePic() {
  return (
    <div className="mx-[-1rem] mt-[-1rem]">
      <Image
        src="https://picsum.photos/400"
        alt="somebody"
        className="rounded-t-md"
        height={400}
        width={400}
      />
    </div>
  );
}
