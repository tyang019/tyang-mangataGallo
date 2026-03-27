export default function Banner({title, subtitle}){
  return (
    <section>
      <div className='website_banner'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}