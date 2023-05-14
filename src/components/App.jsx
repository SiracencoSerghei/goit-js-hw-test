
import Modal from './Modal/Modal'
import Counter from './Counter/Counter'
import Header from './Header/Header'
import Parent from './Parent/Parent'
import FormLogin from './FormLogin/FormLogin'
import { useState } from 'react'
import MyContextProvider from '../utils/MyContext';


const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  	const openModal = () => {
      setIsShowModal(true)
	}
	const closeModal = () => {
    setIsShowModal(false)
	}
  const createUser = (data) => {
		const newUser = {
			...data,
			id: Date.now(),
			role: 'customer',
		}
		console.log(newUser)
	}

  return (
	<MyContextProvider >
    <div className='container'>
 				<Header open={openModal} />
 				<Counter />
 				<Parent close={closeModal} isOpen={isShowModal}>
 					Some
 				</Parent>
 				{isShowModal && (
					<Modal close={closeModal}>
						<FormLogin
							close={closeModal}
							createUser={createUser}
						/>
					</Modal>
				)}
			</div>
			</MyContextProvider>
  )
}

export default App
