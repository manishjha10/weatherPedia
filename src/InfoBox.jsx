import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './InfoBox.css'; 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';



export default function InfoBox({ info }){
    const INFO_URL = "https://images.unsplash.com/photo-1733164847768-694d4bd1ecf7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687";
     
    const Cold_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074";
    const Rain_URL ="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735";
    const Hot_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";
    
    
    return (
        <div className="InfoBox">
         <div className = "cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                            image={
                                    info.humidity > 80 ?
                                    Rain_URL :
                                    info.temp > 15 ? Hot_URL :
                                    Cold_URL
                            }
                        alt="green iguana"
                    />
                    <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
                                {
                                    info.humidity > 80 ? <ThunderstormIcon /> :
                                        info.temp > 15 ? <LocalFireDepartmentIcon /> :
                                            <AcUnitIcon />
                                }
                            </Typography>

                            <Typography variant="body2" component="div" sx={{ color: 'text.secondary' }}>
                            <div>Temperate = {info.temp}&deg;C </div>
                            <p>humidity = {info.humidity} </p>  
                            <p>Min Temp = {info.tempMin}</p> 
                            <p>Max Temp = {info.tempMax}</p>
                                <p>The weather can be described as <i>{info.weather}</i></p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
        </div>
    )
}