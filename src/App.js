import React from 'react';
import './App.css';
import Heading from './components/heading/Heading';
import SubHeading from './components/subheading/SubHeading';
import Button from './components/button/Button';
import CustomInput from './components/custom-input/CustomInput';
import Card from './components/card/Card';

function App() {
  const [arrayNum, setArrayNum] = React.useState(1);
  const [randomBgColorArr, setRandomBgColorArr] = React.useState(['#ADD8E6'])
  const [name, setName] = React.useState("")
  const [surname, setSurname] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [age, setAge] = React.useState("")
  const [color, setColor] = React.useState('#000000')
  const [gender, setGender] = React.useState('')
  const [agree, setAgree] = React.useState("")
  const [error, setError] = React.useState("")

  const handleCancel = (e) => {
    e.preventDefault();
    setName("")
    setSurname("")
    setEmail("")
    setAge("")
    setColor("#000000")
    setGender('')
    setGender("")
    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let nextNum = arrayNum + 1;
    setArrayNum(nextNum)
    let nextBgColor = getRandomColor()
    let updatedBgColorArr = [...randomBgColorArr, nextBgColor]
    setRandomBgColorArr(updatedBgColorArr)
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target
    if (name === 'name') {
      setName(value)
      setError(validateField(name, value));
    }
    else if (name === 'surname') {
      setSurname(value)
      setError(validateField(name, value))
    }
    else if (name === 'email') {
      setEmail(value)
      setError(validateField(name, value))
    }
    else if (name === 'age') {
      setAge(value)
      setError(validateField(name, value))
    }
    else if (name === 'color') {
      setColor(value)
    }
  }

  function validateField(name, value) {
    var pattern = /^[a-zA-Z]*$/;
    if (name === 'name' || name === 'surname') {
      if (pattern.test(value.trim()))
        return ""
      else
        return "The value must be a string without any numbers or special characters."
    } else if (name === 'age') {
      if (!isNaN(+value) && value > 0 || !value) {
        return ''
      } else {
        return "The age must be a number greater than zero."
      }
    } else if (name === 'email') {
      const temp = value.split('@')
      if (temp.length === 2) {
        return ''
      } else {
        return 'The email should contain the @ symbol.'
      }
    }
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="App">
      {[...Array(arrayNum)].map((elementInArray, index) => ( 
        <Card backgroundColor={randomBgColorArr[index]}>
          <form onSubmit={handleSubmit}>
            <Heading title="Card 1" textColor="#F00" />
            <SubHeading title="first card description" textColor="#FFF" />
            {error && <p className='error'>* {error}</p>}
            <CustomInput
              name='name'
              type='text'
              handleChange={handleChange}
              value={name}
              label='name'
              placeholder="please enter your name"
              required
            />
            <CustomInput
              name='surname'
              type='text'
              handleChange={handleChange}
              value={surname}
              label='surname'
              placeholder="please enter your surname"
              required
            />
            <CustomInput
              name='email'
              type='email'
              handleChange={handleChange}
              value={email}
              label='email'
              placeholder="please enter your email"
              required
            />
            <CustomInput
              name='age'
              type='text'
              handleChange={handleChange}
              value={age}
              label='age'
              placeholder="please enter your age"
            />
            <CustomInput
              name='color'
              type='color'
              handleChange={handleChange}
              value={color}
              label='favorite color'
              placeholder="please enter the favorite color"
            />

            <div className='radio-container'>
              <input type="radio" value="male" id="male"
                onChange={e => setGender(e.target.value)} name="gender" />
              <label for="male">Male</label>

              <input type="radio" value="female" id="female"
                onChange={e => setGender(e.target.value)} name="gender" />
              <label for="female">Female</label>
            </div>

            <label>
              <input
                name='agree'
                type="checkbox"
                defaultChecked={agree}  // React checkbox onChange get value
                onChange={e => setAgree(e.target.value)}  // React checkbox onChange setState 
              />Would you like to receive notifications?
            </label>
            <div className='bottom-container'>
              <Button text="Cancel" backgroundColor="#F00" textColor="#FFF" padding="15px" onClick={handleCancel} />
              <Button text="Submit" backgroundColor="#0F0" textColor="#FF0" padding="15px" disabled={!name || !surname || !email || !age || !color || !gender} onClick={handleSubmit} />
            </div>
          </form>
        </Card>
      ))}
    </div>
  );
}

export default App;
