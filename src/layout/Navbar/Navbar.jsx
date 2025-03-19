import React from 'react'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Logo from '../../assets/logo.png'
import Text from '../../components/Text'
import Menu from '../../components/Menu'
import ButtonSearch from '../../components/ButtonSearch'
import Button01 from '../../components/Button01'
import { GrSearch } from 'react-icons/gr'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    <div className="bg-DarkGrey">
      <div className="bg-white py-3.5 pl-4 max-w-[1680px] ml-auto rounded-l-[50px] ">
          <Flex className={'items-center '}>
              <div className="">
                  <Flex className={'gap-x-3.5 items-center'}>
                      <Image imgSrc={Logo} imgAlt={'Logo'}/>
                      <div className="">
                          <Text as="p" text="ORTENCEY " className="text-[22px] font-Nunito font-bold text-black"/>
                          <Text as="p" text="Digital Marketing " className="text-[15px] font-Dm  text-Parbel"/>
                      </div>
                  </Flex>
              </div>
              <div className="">
                  <Flex className={'gap-x-6 py-5 items-center px-40 justify-center'}>
                      <Link to={'/'}>
                        <div className="relative group">
                            <Menu menuname={'Home'}/>
                            <span className='w-12  h-0.5 group-hover:bg-gradient-to-r group-hover:from-Orange group-hover:to-OrangeLight bg-transparent duration-700 absolute bottom-0 group-hover:-bottom-9 left-0 '></span>
                        </div>
                      </Link>
                      <Link to={'/about'}>
                        <div className="relative group">
                            <Menu menuname={'About'}/>
                            <span className='w-12  h-0.5 group-hover:bg-gradient-to-r group-hover:from-Orange group-hover:to-OrangeLight bg-transparent duration-700 absolute bottom-0 group-hover:-bottom-9 left-0 '></span>
                        </div>
                      </Link>
                      <Link to={'/service'}>
                        <div className="relative group">
                            <Menu menuname={'Services'}/>
                            <span className='w-12  h-0.5 group-hover:bg-gradient-to-r group-hover:from-Orange group-hover:to-OrangeLight bg-transparent duration-700 absolute bottom-0 group-hover:-bottom-9 left-0 '></span>
                        </div>
                      </Link>
                      <Link to={'/team'}>
                        <div className="relative group">
                            <Menu menuname={'Team'}/>
                            <span className='w-12  h-0.5 group-hover:bg-gradient-to-r group-hover:from-Orange group-hover:to-OrangeLight bg-transparent duration-700 absolute bottom-0 group-hover:-bottom-9 left-0 '></span>
                        </div>
                      </Link>
                      <div className="relative group">
                          <Menu menuname={'Pages'}/>
                          <span className='w-12  h-0.5 group-hover:bg-gradient-to-r group-hover:from-Orange group-hover:to-OrangeLight bg-transparent duration-700 absolute bottom-0 group-hover:-bottom-9 left-0 '></span>
                      </div>
                      <div className="relative group">
                          <Menu menuname={'News'}/>
                          <span className='w-12  h-0.5 group-hover:bg-gradient-to-r group-hover:from-Orange group-hover:to-OrangeLight bg-transparent duration-700 absolute bottom-0 group-hover:-bottom-9 left-0 '></span>
                      </div>
                      <div className="relative group">
                          <Menu menuname={'Contact'}/>
                          <span className='w-12  h-0.5 group-hover:bg-gradient-to-r group-hover:from-Orange group-hover:to-OrangeLight bg-transparent duration-700 absolute bottom-0 group-hover:-bottom-9 left-0 '></span>
                      </div>
                  </Flex>
              </div>
              <div className="pr-16">
                <Flex className={'gap-x-6 items-center'}>
                    <ButtonSearch icon={<GrSearch className='text-Parbel text-2xl'/>}/>
                    <ButtonSearch icon={<HiOutlineShoppingBag className='text-Parbel text-2xl'/>}/>
                    <Button01/>
                </Flex>
              </div>
          </Flex>
      </div>
    </div>
    </>
  )
}

export default Navbar