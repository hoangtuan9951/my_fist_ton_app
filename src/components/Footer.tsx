import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home } from './Home';
import { Play } from './Play';
import { useLocation, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Stars from '@mui/icons-material/Stars'
import AssignmentTurnedIn from '@mui/icons-material/AssignmentTurnedIn'
import { useState } from 'react';
export function FooterMenu(){
    const [value, setValue] = useState(0)
    return (
        <BottomNavigation sx={{ width: '90%', position: 'absolute', bottom: 0, borderRadius: 5}} value={value} onChange={(event, newValue)=> {
            setValue(newValue)
        }}
        showLabels
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon/>} value="/" />
            <BottomNavigationAction label="Play" icon={<PlayArrow/>} value="/play"/>
            <BottomNavigationAction label="Ranking" icon={<Stars/>} value="/ranking" />
            <BottomNavigationAction label="Claim" icon={<AssignmentTurnedIn/>}  value="/claim"/>
        </BottomNavigation>
    );
}