export default () => (
  <iframe src='/game' allow={
    'autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr'
  } style={{
    width: '100vw',
    height: '100vh',
    border: 'none',
  }} />
)
