export default function coldWeather(props: any) {
  const { someTestData } = props

  return (<>
    <h1>{someTestData}</h1>
  </>)
}

export async function getStaticProps(context: Object) {
  return {
    props: {
      someTestData: 'some test data'
    },
  }
}