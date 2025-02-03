const Docs =async ({params}:{params:Promise<{slug:string[]}>}) => {
    const {slug} =await params
  return (
    <div>{slug.map((s,i)=>(<div key={i}>{s}</div>))}</div>
  )
}
export default Docs