// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import CssBaseline from '@mui/material/CssBaseline';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import * as React from 'react';

// import { useForm, SubmitHandler } from "react-hook-form"
// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//         {'Copyright © '}
//         <Link color="inherit" href="https://mui.com/">
//             Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//         </Typography>
//     );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// const user = {
//   email: String,
//   password: String
// }

// const HandleClick = async () => {
//   console.warn(email, password);
//   let result = await fetch('http://localhost:5000/register', {
//       method: 'post',
//       body: JSON.stringify({ email, password}),
//       headers: {
//           'Content-Type': 'application/json'
//       },
//   });
//   result = await result.json();
//   console.warn(result);
//   localStorage.setItem("Users", JSON.stringify(result));
// }


// export default function SignInSide() {

//   us

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '90vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={HandleClick}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="#" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }













// import React, { useState } from 'react';
// import './SignIn.css';
// // import { useNavigate } from 'react-router-dom';

// function SignIn  () {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [city, setCity] = useState("");
//     const [state, setState] = useState("");
//     // const navigate = useNavigate();

//     // useEffect(() => {
//     //     const auth = localStorage.getItem('users');
//     //     if(auth){
//     //         navigate('/login');
//     //     }
//     // });

//     // const HandleClick=async ()=>{
//     //     console.warn(name,email,password);
//     //     let result =await fetch('http://localhost:3000/register',{
//     //         method:'post',
//     //         body:JSON.stringify({name,email,password}),
//     //         headers:{
//     //             'Content-Type':'application/json'
//     //         },
//     //     });
//     //     result = await result.json();
//     //     console.warn(result);
//     //     localStorage.setItem("users",JSON.stringify(result));
//     //     navigate('/');
//     // }

//     const HandleClick = async () => {
//         console.warn(name, email, password, city, state);
//         let result = await fetch('http://localhost:5000/register', {
//             method: 'post',
//             body: JSON.stringify({ name, email, password,city,state }),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });
//         result = await result.json();
//         console.warn(result);
//         localStorage.setItem("users", JSON.stringify(result));
//         // navigate('/login');
//     }
    

//     return (
//     <div>
//         <div style={{height:'440px',width:'60%',marginTop:'25px',marginLeft:'280px',border:'1px solid #8f8b8b',borderRadius:'8px'}}>
//             <div class="row g-0">
//                 <div class="col-md-4">
//                 <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=740&t=st=1705908072~exp=1705908672~hmac=2f840441881fe9ff4a7a262010ece8f772bb25fc7086e1f2cabbd41ea8eb6e33" class="img-fluid-sign" alt="img"/>
//                 </div>
//                 <div class="col-md-12 text-center" style={{height:'360px',width:'270px',marginTop:'40px',marginLeft:'200px'}}>
//                 <img className="LoginLogo" src='https://banner2.cleanpng.com/20181110/srt/kisspng-computer-icons-login-scalable-vector-graphics-emai-5be7376911c6b4.4735764415418796570728.jpg' alt='logo' />
//                     <h1 style={{marginTop:'-28px',marginBottom:'20px'}}>Register</h1>
//                     <form className="row g-3">
//                     <div className="col-md-12">
//                         <input style={{border:'2px solid skyblue'}} value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder='Name' id="Name"/>
//                     </div>
//                     <div className="col-md-12">
//                         <input style={{border:'2px solid skyblue'}} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" placeholder='E-mail' id="inputEmail4"/>
//                     </div>
//                     <div className="col-md-12">
//                         <input style={{border:'2px solid skyblue'}} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" placeholder='Password' id="inputPassword4"/>
//                     </div>
//                     <div className="col-md-6">
//                         <input style={{border:'2px solid skyblue'}} value={city} onChange={(e)=>setCity(e.target.value)} type="text" className="form-control" placeholder='City' id="inputCity"/>
//                     </div>
//                     <div className="col-md-6">
//                         <select value={state} onChange={(e)=>setState(e.target.value)} style={{border:'2px solid skyblue'}} id="inputState" className="form-select">
//                         <option>State</option>
//                         <option>Maharastra</option>
//                         <option>Karnataka</option>
//                         <option>Madhya Pradesh</option>
//                         <option>Rajsthan</option>
//                         <option>Punjab</option>
//                         <option>Haryana</option>
//                         </select>
//                     </div>
//                     <div className="col-12 text-center">
//                         <button onClick={HandleClick} type="submit" className="btn btn-primary">Sign in</button>
//                     </div>
//                     </form>
//                 </div>
//             </div>
//             </div>
//         </div>
//     );
// }

// export default SignIn;




import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import { useForm } from "react-hook-form";
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.



export default function SignInSide() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("btn clicked  : "+data.email);
    try {
      const result = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({data}),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!result.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await result.json();
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input  placeholder='abc@gmail.com' {...register('email')} type='email'  />
      <input placeholder='enter password' {...register('password', { required: true })} type='password' />
      {errors.password && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
