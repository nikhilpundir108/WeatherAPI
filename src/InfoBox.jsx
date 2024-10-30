import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const init_url =
    "https://images.unsplash.com/photo-1628525805814-cf9fe2582727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1689298468802-5c2cfb626971?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://media.istockphoto.com/id/846025360/photo/happy-child-girl-with-an-umbrella-and-rubber-boots-in-puddle-on-autumn-walk.webp?a=1&b=1&s=612x612&w=0&k=20&c=x6H6dI9P2SgHzWXQ1wZGQDXboryaslZCz5s_nE4kfc8=";
  return (
    <div className="InfoBox">
      {/* <h1>weatherInfo</h1> */}
      <div className="cardBox">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>{info.City}</p>
              <p>Tempertaure : {info.temp}&deg;C</p>
              <p>feelsLike : {info.feelsLike}&deg;C</p>
              <p>humidity: {info.humidity} </p>
              <p>tempMax: {info.tempMax}&deg;C</p>
              <p>tempMin: {info.tempMin}&deg;C</p>
              <p>weather:{info.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
