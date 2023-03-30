import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function StoreListings() {
  return (
    <Container className="p-4 mx-auto">
      <h2 className="text-center mb-4">Browse stores in Houston</h2>
      <Row className="my-4 align-items-center justify-content-center">
        <Col xs="auto" className="text-center">
          <Image 
            src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" 
            roundedCircle 
          />
          <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
          <p>Delivery * Pickup</p>
        </Col>
        <Col xs="auto" className="text-center mt-4">
          <Image 
            src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png" 
            srcSet="https://www.instacart.com/image-server/150x/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png 1.5x, https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png 2x" 
            alt="Sprouts Farmers Market" 
            width="100" 
            height="100" 
            className="rounded-circle"
          />
          <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
          <p>Delivery * Pickup</p>
        </Col>
        <Col xs="auto" className="text-center mt-4">
          <Image 
            src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/1925/37df4aac-c8d4-48ce-8ddc-8dc5666997b4.png" 
            srcSet="https://www.instacart.com/image-server/150x/www.instacart.com/assets/domains/warehouse/logo/1925/37df4aac-c8d4-48ce-8ddc-8dc5666997b4.png 1.5x, https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/1925/37df4aac-c8d4-48ce-8ddc-8dc5666997b4.png 2x" 
            alt="Harris Teeter" 
            width="100" 
            height="100" 
            className="rounded-circle"
          />
          <h5 style={{ fontWeight: "bold" }}>Harris Teeter</h5>
          <p>Delivery * Pickup</p>
        </Col>
        <Col xs="auto" className="text-center mt-4">
          <Image 
            src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" srcset="https://www.instacart.com/image-server/150x/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png 1.5x, https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png 2x" 
            alt="Costco" 
            width="100" 
            height="100" 
            className="rounded-circle"
          />
          <h5 style={{ fontWeight: "bold" }}>Costco</h5>
          <p>Delivery * Pickup</p>
        </Col>
        <Col xs="auto" className="text-center mt-4">
          <Image 
          src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/1573/e04c8eaf-a180-4753-b651-8c4a1c81845c.png" srcset="https://www.instacart.com/image-server/150x/www.instacart.com/assets/domains/warehouse/logo/1573/e04c8eaf-a180-4753-b651-8c4a1c81845c.png 1.5x, https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/1573/e04c8eaf-a180-4753-b651-8c4a1c81845c.png 2x" 
            alt="Walgreens" 
            width="100" 
            height="100" 
            className="rounded-circle"
          />
          <h5 style={{ fontWeight: "bold" }}>Walgreens</h5>
          <p>Delivery * Pickup</p>
        </Col>
        <Col xs="auto" className="text-center mt-4">
          <Image 
           src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png" srcset="https://www.instacart.com/image-server/150x/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png 1.5x, https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png 2x" 
            alt="Publix" 
            width="100" 
            height="100" 
            className="rounded-circle"
          />
          <h5 style={{ fontWeight: "bold" }}>Publix</h5>
          <p>Delivery * Pickup</p>
        </Col>
        <Col xs="auto" className="text-center mt-4">
          <Image 
           src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png" srcset="https://www.instacart.com/image-server/150x/www.instacart.com/assets/domains/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png 1.5x, https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/231/6347ea31-64ed-43c4-991b-7433b2d74bda.png 2x" 
            alt="Wegmens" 
            width="100" 
            height="100" 
            className="rounded-circle"
          />
          <h5 style={{ fontWeight: "bold" }}>Wegmens</h5>
          <p>Delivery * Pickup</p>
        </Col>
        <Col xs="auto" className="text-center mt-4">
          <Image 
           src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/1879/43fb59cc-59cd-475d-b01c-6f863725e468.png" srcset="https://www.instacart.com/image-server/150x/www.instacart.com/assets/domains/warehouse/logo/1879/43fb59cc-59cd-475d-b01c-6f863725e468.png 1.5x, https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/1879/43fb59cc-59cd-475d-b01c-6f863725e468.png 2x"    
            alt="Food Lion "  
            width="100" 
            height="100" 
            className="rounded-circle"
          />
          <h5 style={{ fontWeight: "bold" }}>Food Lion</h5>
          <p>Delivery * Pickup</p>
        </Col>
        </Row>
        </Container>
  )
}