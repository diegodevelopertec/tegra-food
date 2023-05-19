import { SectionTop,ButtomMobile } from "./style"
import Cart from '/shopping_cart.png'
import Notification from '/notifications.png'
import Profile from '/unsplash_mEZ3PoFGs_k.png'
import Menu from '/menu.png'
import Inter from '/inter.png'
import { useGlobalContext } from "../../Context/appContext"
import { useNavigate } from "react-router-dom"


export const TopMenu=()=>{

    const { onMenuMobile,setMenuMobile}=useGlobalContext()
    const navigate=useNavigate()


return <SectionTop >
            <div onClick={()=>!onMenuMobile ? setMenuMobile(true) : null}>
                <ButtomMobile>
                    <img src={Menu} />
                </ButtomMobile>
            </div>
            <div>
              {location.pathname.includes('admin') ? <img src={Inter} alt="" /> : <img src={Cart} alt="" onClick={()=>navigate('/cart')} />}
                <img src={Notification} alt="" />
                <img className="profile" src={Profile} alt="" />
            </div>
        </SectionTop>

}

