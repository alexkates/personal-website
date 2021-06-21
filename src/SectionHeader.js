export default function SectionHeader({ text, imageSrc }) {
  return (
    <div className="w-auto flex mt-10 items-center justify-center xl:justify-start xl:ml-12" >
      <h2 className="text-4xl">{text}</h2>
      <img className="w-16 h-16" src={imageSrc} alt="" />
    </div>
  )
}