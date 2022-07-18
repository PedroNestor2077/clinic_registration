import './App.css'
import ClinicsView from './screens/ClinicsView'
import Footer from './components/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'
import ClinicsProvider from './contexts/ClinicsContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <ClinicsProvider>
        <div className="App">
          <ClinicsView />
          <Footer />
        </div>
      </ClinicsProvider>
      <ToastContainer style={{ zIndex: 100000000000 }} />
    </QueryClientProvider>
  )
}

export default App
