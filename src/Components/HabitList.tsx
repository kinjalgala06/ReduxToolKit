import { RootState } from "../Store/store";
import React from "react";
import { useSelector } from "react-redux";
import { Box, Paper, Typography, Grid, Button, LinearProgress } from "@mui/material";
import { CheckCircle, Delete } from "@mui/icons-material";
import { removeHabit, toggleHabit } from "../Store/habbit-slice";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Store/store';

import { Habit } from "../Store/habbit-slice";

const HabitList: React.FC = () => {
  const { habits } = useSelector((state: RootState) => state.habits);
  const today = new Date().toISOString().split("T")[0];

  const dispatch = useDispatch<AppDispatch>();

  const getStreak=(habit:Habit)=>{
    let streak=0
    const currentDate=new Date()

    while(true){
      const dateString =currentDate.toISOString().split("T")[0];

      if(habit.completeDates.includes(dateString)){
        streak++;
        currentDate.setDate(currentDate.getDate()-1);
      }else{
        break;
      }
    }
    return streak;
  };
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => {
        return (
          <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid>
                    <Typography variant="h6" sx={{ textTransform: "capitalize" }} >
                        {habit.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text-secondary"
                        sx={{ textTransform: "capitalize" }}
                    >
                        {habit.frequency}
                    </Typography>
                </Grid>

                <Grid>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                        <Button variant="outlined"
                            color={
                                habit.completeDates.includes(today)?"success":"primary"
                            }
                            startIcon={<CheckCircle/>}
                            onClick={()=>
                              dispatch(toggleHabit({id:habit.id,date:today}))
                            }
                        >
                             {habit.completeDates.includes(today)?"Complete":"Mark Complete"}
                        </Button>
                        
                        <Button variant="outlined"
                            color="error"
                            startIcon={<Delete/>}
                            onClick={()=>
                              dispatch(removeHabit({ id:habit.id}))
                            }
                        >
                            Remove
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{mt: 2,textAlign: "left"}}>
              <Typography variant="body2">
                Current Streak: {getStreak(habit)} days
              </Typography>

              <LinearProgress variant="determinate" value={(getStreak(habit)/30*100)}
              sx={{mt:1}}
              />
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
};

export default HabitList;
