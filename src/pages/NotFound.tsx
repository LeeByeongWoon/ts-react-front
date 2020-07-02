import React, { useEffect } from 'react';
import { useUsersSetVisible } from 'status/visibleContext';

function NotFound({ children }: { children: React.ReactNode }) {
    const change = useUsersSetVisible();
    // component mount 시 visible-false로 header를 숨김
    useEffect(() => {
        change(false);
        // clean-up 함수 실행으로 컴포넌트를 벗어날 시 visible-true 로 변경
        return () => {
            change(true);
        };
    }, [change])
    return (
        <div>
            <h1>{children}</h1>
        </div>
    )
}

export default NotFound;