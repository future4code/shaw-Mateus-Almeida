import * as React from 'react';
import Modal from '@mui/material/Modal';
import { BoxModal, ButtonAddToCart, SelectyQuantity, TitleModal } from './styled';


const ModalSelectQuantity = ({open, setOpen}) => {
 
 

    return (
        <>
            
            <Modal
                
                open={open}
                onClose={()=>setOpen(false)}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                    <BoxModal>
                       
                    <TitleModal>
                        Selecione a quantidade desejada
                    </TitleModal>
                    <SelectyQuantity>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>10</option>
                        <option>50</option>
                        <option>100</option>
                        

                    </SelectyQuantity>
                    <ButtonAddToCart>
                        Adicionar ao carrinho
                    </ButtonAddToCart>

                    </BoxModal>
              
            </Modal>
        </>
    );
}
export default ModalSelectQuantity