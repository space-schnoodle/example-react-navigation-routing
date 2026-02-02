import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {};
  
  return (
    <div>
      <div>
        <Button primary className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload/>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button danger>
          <GoDatabase/>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button warning>Save The World!</Button>
      </div>
      <div>
        <Button success>Make peace!</Button>
      </div>
    </div>    
  );
};

export default ButtonPage;
