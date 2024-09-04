import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from 'react'

function App() {
  // Khai báo state cho userInput
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  // Khởi tạo ban đầu bắt buộc phải lớn hơn 0
  // const isInputValue = userInput.duration >= 1;

  // Xử lý sự kiện thay đ��i giá trị input
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier] : + newValue
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {/* {!isInputValue && <p className="center">Please enter valid values for duration and investment duration.</p>} */}
      {/* {isInputValue && <Results input={userInput} />} */}
      {<Results input={userInput} />}

    </>
  )
}

export default App
