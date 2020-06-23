import React from 'react';
import { Header } from 'components/Base';
import { LoginButton } from 'components/Base/Header';
import { useUsersVisible } from 'status/visibleContext';

function HeaderContainer() {
    const visible = useUsersVisible();
    if (!visible) return null;
    return (
        <Header><LoginButton /></Header>
    )
}

export default HeaderContainer;