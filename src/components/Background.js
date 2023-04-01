import { Card, Form } from 'react-bootstrap';

export default function Background() {
  return (
    <div
      className="bg-image"
      style={{
        backgroundImage:
          "url('https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286….jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '50vh',
      }}
    >
      <div style={{ paddingTop: '2vh' }}>
        <Card
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '428px',
            margin: '0 auto',
            backgroundColor: '#DDEDD6',
            boxShadow: 'none',
          }}
          className="text-black"
        >
          <div
            style={{
              top: 'auto',
              width: '578px',
              marginLeft: '50px',
              marginBottom: '50px',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Card.Text 
               style={{ fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center' }}>
              Order groceries for delivery <br /> or pickup today
            </Card.Text>
            <Card.Text style={{ fontSize: '1em', textAlign: 'center' }}>
              Whatever you want from local stores, brought right to your door.
            </Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control size="lg" type="text" placeholder="   Enter your address" />
              </Form.Group>
            </Form>
          </div>
        </Card>
        <img
          style={{
            width: '20%',
            position: 'absolute',
            top: '11%',
            right: '.0%',
            transform: 'translateY(-50%, -50%)',
          }}
          src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg"
          alt="Card image"
        />
      </div>
    </div>
  );
}

