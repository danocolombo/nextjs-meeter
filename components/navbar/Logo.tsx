import React from 'react';
import Link from 'next/link';
import { HiHomeModern } from 'react-icons/hi2';
import { Button } from '@/components/ui/button';
function Logo() {
    return (
        <Button size='icon' asChild>
            <Link
                href='/'
                className='flex items-center justify-center bg-blue-500'
            >
                <HiHomeModern className='w-full h-full text-white' />
            </Link>
        </Button>
    );
}

export default Logo;