import Link from 'next/link';

const TrustedCompanList = (props) => {
  return (
    <>
      <div 
          className="edu-client-logobox" 
          style={{ 
            backgroundColor: '#ffc107', 
            color: '#ffffff', 
            width: '15vw', 
            margin: 'auto',
            height: '50px' ,
            fontsize: '18px'
          }} 
          onMouseOver={(e) => e.target.style.backgroundColor = '#ffa600'} 
          onMouseOut={(e) => e.target.style.backgroundColor = '#ffc107'}
          >
          <Link href="/"legacyBehavior>
            <a>
              {/* <img src={props.img} alt=""/> */}
              {props.val}
            </a>
          </Link>
        </div>
    </>
  );
};
export default TrustedCompanList;
