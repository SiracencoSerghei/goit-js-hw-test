// import ToDoList from './ToDoList/ToDoList'
// import Modal from './Modal/Modal'
import Counter from './Counter/Counter'
// import Header from './Header/Header'
// import Parent from './Parent/Parent'
// import FormLogin from './FormLogin/FormLogin'
// import Search from './Search/Search'
// import ContentInfo from './ContentInfo/ContentInfo'
// import Avatar from '../avatar-svgrepo-com.svg'
// import { useState } from 'react'



const App = () => {
//   const [isShowModal, setIsShowModal] = useState(false);
//   const [searchText, setSearchText] = useState('');

  	// const openModal = () => {
    //   setIsShowModal(true)
	// }
	// const closeModal = () => {
    // setIsShowModal(false)
	// }
//   const createUser = (data) => {
// 		const newUser = {
// 			...data,
// 			id: Date.now(),
// 			role: 'customer',
// 		}
// 		console.log(newUser)
// 	}
//   const handleSearch = (searchText) => {
//     setSearchText(searchText)
	// }

  return (
    <div className='container'>
 				{/* <Header open={openModal} /> */}
 				{/* <img src={Avatar} alt="" /> */}
 				<Counter />
 				{/* <ToDoList />

 				<Parent close={closeModal} isOpen={isShowModal}>
 					Some
 				</Parent>
 				<Search handleSearch={handleSearch} />
 				<ContentInfo searchText={searchText} /> */}
 				{/* {isShowModal && (
					<Modal close={closeModal}>
						<FormLogin
							close={closeModal}
							createUser={createUser}
						/>
					</Modal>
				)} */}
			</div>
  )
}

export default App
