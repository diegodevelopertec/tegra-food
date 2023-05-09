import { SectionTop,ButtomMobile } from "./style"
import Cart from './../../../public/shopping_cart.png'
import Notification from './../../../public/notifications.png'
import Profile from './../../../public/unsplash_mEZ3PoFGs_k.png'
import Menu from './../../../public/menu.png'
import Inter from './../../../public/inter.png'
import { useGlobalContext } from "../../Context/appContext"



export const TopMenu=()=>{

    const { onMenuMobile,setMenuMobile}=useGlobalContext()
return <SectionTop >
            <div onClick={()=>!onMenuMobile ? setMenuMobile(true) : null}>
                <ButtomMobile>
                    <img src={Menu} />
                </ButtomMobile>
            </div>
            <div>
              {location.pathname.includes('admin') ? <img src={Inter} alt="" /> : <img src={Cart} alt="" />}
                <img src={Notification} alt="" />
                <img className="profile" src={Profile} alt="" />
            </div>
        </SectionTop>

}

