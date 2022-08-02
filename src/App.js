import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import { Box, Typography, ThemeProvider, useTheme } from '@mui/material';
import customTheme from './theme/customTheme';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Wheel } from './components/wheel';
import { IconAndButton } from './components/buttons/IconAndButton';
import { InputText } from './components/formComponents';
import { PlayersList } from './components/list/PlayersList';
import { WinnerDialog } from './components/dialog/winnerDialog';
import { useForm } from 'react-hook-form'
import { gsap, Linear, Elastic } from 'gsap';
import { getRandomInteger } from './utils/getRandomInteger';
import { v4 as uuid } from 'uuid';


function App() {
 
  
  const theme  = useTheme()

  let wheelTl = useRef(null)

  const wheelRef = useRef(null)

  const radiusesRef = useRef([])
  const pikeRef = useRef(null)
  
  const refs = useRef({wheelRef, radiusesRef, pikeRef})

  const { handleSubmit, reset, control, formState: { errors } } = useForm()
  
  const [players, setPlayers] = useState([])

  const [isSpinning, setIsSpinning] = useState(false)

  const[winner, setWinner] = useState(null)
  
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
      radiusesRef.current = radiusesRef.current.slice(0, players.length) 

  }, [players.length])





  const handleAdd = (data) => {
  
    const name = Object.values(data)[0]
    const id = uuid()
   
    setPlayers([...players, {name, id}])

    reset()

  }

  const handleClearplayers = () => {
    setPlayers([])
  }

  const handleRemovePlayer = (index) => {

    let playersCopy = [...players]
    playersCopy.splice(index, 1)
    
    setPlayers(playersCopy)

  }

  const [random, setRandom] = useState(null)


  const handleRandom = () => {
    //as double security because button are disabled when isSpinning is true 
    if(isSpinning) return
    
    setWinner(null)
    setIsSpinning(true)
    setRandom(getRandomInteger(360))
  }

  useEffect(() => {
    if(random) wheelTl.current.play()
  }, [random])

 
  useEffect(() => {

    if(!winner) return
  
    setIsDialogOpen(true)

  }, [winner])

  useEffect(() => {
   
    let wheel = wheelRef.current
   
    
    wheelTl.current = gsap.timeline()

    let initialBackwardRotation = 20
    wheelTl.current.to(wheel, {
      rotation: `-=${initialBackwardRotation}`,
      ease:Linear.easeNone,
      // repeat:1,
      duration: 1,
    })

    wheelTl.current.to(wheel, {
      rotation: '+=360',
      ease:Linear.easeNone,
      duration: 0.5
    })

    wheelTl.current.to(wheel, {
      rotation: '+=360',
      ease:Linear.easeNone,
      duration: 0.75
    }, '>')


    wheelTl.current.to(wheel, {
      rotation: '+=360',
      ease:Linear.easeNone,
      duration: 1.5
    }, '>')

    wheelTl.current.to(wheel, {
      rotation: '+=360',
      ease:Linear.easeNone,
      duration: 2
    }, '>')

    wheelTl.current.to(wheel, {
      rotation: '+=360',
      ease:Linear.easeNone,
      duration: 2.5
    }, '>')

    wheelTl.current.to(wheel, {
      rotation: '+=360',
      ease:Linear.easeNone,
      duration: 3.5
    }, '>')

    wheelTl.current.to(wheel, {
      rotation: '+=360',
      ease:Linear.easeNone,
      duration: 4.5
    }, '>')

    wheelTl.current.to(wheel, {
      rotation: '+=360',
      ease:Linear.easeNone,
      duration: 5.5
    }, '>')

 
    let finalRotation = random || 0
   
    let finalDuration = 8
    if(finalRotation < 300) finalDuration = 6
    if(finalRotation < 240) finalDuration = 4
    if(finalRotation < 180) finalDuration = 3
    if(finalRotation < 100) finalDuration = 2
    if(finalRotation < 50) finalDuration = 1
    if(finalRotation < 25) finalDuration = 0.5
    
    wheelTl.current.to(wheel, {
      rotation: `+=${finalRotation}`,
    
      ease:Linear.easeNone,
      
      duration: finalDuration
    }, '>')

    

    wheelTl.current.reverse()


    wheelTl.current.eventCallback('onComplete', () => {

     let bottomValues = radiusesRef.current.map(radius => {

      return radius.getBoundingClientRect().bottom
    })

 
    const max = Math.max(...bottomValues)
 
    const index = bottomValues.indexOf(max)
    setIsSpinning(false)
    setWinner(players[index].name)
    
   
    })


    return () => wheelTl.current.kill()

  }, [players, players.length, random])

  let notEnoughPlayer = players.length <= 1

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{padding: '1.5rem', backgroundColor: theme.palette.primary.main, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box sx={{ width: {xs: '90%', md: '50%'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
          <Box>
            <Wheel players={players} ref={refs} />
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <IconAndButton 
                onClick={handleClearplayers} 
                disabled={notEnoughPlayer || isSpinning} 
                title={'Reset'} 
                icon={<RestartAltIcon 
                sx={{color: 'white'}} />}
              />
              <IconAndButton 
                onClick={handleRandom} 
                disabled={notEnoughPlayer || isSpinning} 
                title={'Play'} 
                icon={<PlayCircleIcon 
                sx={{color: 'white'}} />}
              />
            </Box>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
            <Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
              <InputText 
                control={control}
                name='participant'
                label='Add a new participant'
                rules={{ validate: {
                  required: (value) => value.length > 0 || 'Name of the participant required',
                  }
                }}
              />
              <IconAndButton 
                onClick={handleSubmit(handleAdd)} 
                disabled={isSpinning} 
                icon={
                    <AddCircleOutlineIcon 
                      sx={{color: 'white'}}
                      />}
                />
                    
            </Box>
          </Box> 
        </Box>
        <Box sx={{height: '80%', width: {xs: '90%', sm: '50%', md: '30%'}, overflow: 'auto'}}>
              <PlayersList players={players} handleRemovePlayer={handleRemovePlayer} />
        </Box>
      </Box>
      <WinnerDialog 
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        winner={winner} 
      />
    </ThemeProvider>
  );
}

export default App;
