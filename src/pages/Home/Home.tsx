import { Link } from 'react-router-dom';

import { HOME_LIST } from './constants';

export default function Home() {
    return (
        <div className="w-full space-y-5">
            {HOME_LIST.map(({ name, list }) => (
                <div key={name} className="flex w-full flex-col">
                    <p className="mb-5 text-28 font-black uppercase text-primary-800">{name}</p>
                    <div className="flex flex-wrap gap-5">
                        {list.map((data) => (
                            <div
                                key={data}
                                className="flex w-full flex-col tablet:w-[calc(50%-10px)] laptop:w-[calc(33%-10.5px)]"
                            >
                                <Link
                                    title="컴포넌트 확인하기"
                                    to={
                                        name === 'Demo'
                                            ? `/demo/${data.toLowerCase()}`
                                            : `/example/${name.toLowerCase()}?component=${data}`
                                    }
                                >
                                    <div className="relative pb-[57.69%]">
                                        <div className="absolute top-0 flex h-full w-full items-center justify-center rounded-md bg-primary-600 uppercase text-primary-950 hover:border-b-primary-600 hover:bg-primary-50 hover:text-primary-950">
                                            <p className="text-center text-28 font-black text-inherit">{data}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
