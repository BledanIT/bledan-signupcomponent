import Disclaimer from "./components/Disclaimer";
import Header from "./components/Header";
import Form from "./components/Form";
import Attribution from "./components/Attribution";

const App = () => {
  return (
    <div className = 'flex flex-col m-0 md:min-h-screen bg-bgMobile md:bg-bgDesktop bg-highlightCol bg-repeat-y md:bg-cover font-poppins font-normal'>
      <main className = 'grid m-auto gap-6 px-6 md:w-3/4 pt-24 pb-12 md:grid-flow-col md:grid-rows-[auto_auto] md:grid-cols-2'>
        <Header />
        <Disclaimer />
        <Form />
      </main>
      <Attribution />
    </div>
  )
}

export default App