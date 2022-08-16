import {GrHomeRounded} from 'react-icons/gr'
import {CgProfile} from 'react-icons/cg'
import {FiMessageSquare, FiPlusSquare, FiCompass, FiHeart} from 'react-icons/fi'

const MainPage = () => {
    return(
        <div className="flex justify-evenly mt-3 place-items-center">
            <div>instagram</div>
            <div>search</div>
            <div className="flex justify-end">
                <GrHomeRounded className='mx-2 box-content h-7 w-7' />
                <FiMessageSquare className='mx-2 box-content h-7 w-7'/>
                <FiPlusSquare className='mx-2 box-content h-7 w-7'/>
                <FiCompass className='mx-2 box-content h-7 w-7'/>
                <FiHeart className='mx-2 box-content h-7 w-7'/>
                <CgProfile className='mx-2 box-content h-7 w-7'/>
            </div>
        </div>
    );
}

export default MainPage;
