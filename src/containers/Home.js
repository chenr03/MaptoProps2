import { connect } from 'react-redux'
import Home from '../components/Home'
// import { addCar, removeCar } from '../redux/action'



const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Home)
