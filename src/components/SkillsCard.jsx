const SkillsCard = ({ icon, title, text, img }) => {
  return (
    <article>
      {/* <span className="h-16 w-16">{icon}</span> */}
      <div className="flex justify-center items-center">
        <img src={img} alt={img} className="h-16 w-16" />
      </div>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  )
}
export default SkillsCard
