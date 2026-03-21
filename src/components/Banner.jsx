export default function Banner({title, subtitle}){
  return (
    <section>
      <div className='jewelry_banner'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}