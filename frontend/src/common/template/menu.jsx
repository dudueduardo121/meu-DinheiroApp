import React from 'react';
import MenuItem from '../template/menuItem'
import MenuTree from '../template/menuTree'

export default props => {
  return (
    <ul className="sidebar-menu">
        <MenuItem path='#' label="Dashboard" icon='dashboard'/>
        <MenuTree labrl='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' label='Ciclos de Pagamento' icon='usd'/>
        </MenuTree>
    </ul>
  );
}
