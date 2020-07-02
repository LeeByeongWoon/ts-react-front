import React from 'react';
import { LoginButton, Header } from 'components/Base/Header';
import { useUsersVisible } from 'status/visibleContext';

function HeaderContainer() {
    const visible = useUsersVisible();
    if (!visible) return null;
    return (
        <Header><LoginButton /></Header>
    )
}

export default HeaderContainer;