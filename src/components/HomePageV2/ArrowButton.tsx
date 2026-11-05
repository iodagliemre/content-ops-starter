import classNames from 'classnames';
import ChevronLeft from '../svgs/chevron-left';
import ChevronRight from '../svgs/chevron-right';

/** PAKET-P2 round 36px arrow button; moved out of Products.tsx in P7 so the Web Factory slider (G7) uses the same one. */
export default function ArrowButton({
    direction,
    label,
    disabled,
    onClick
}: {
    direction: 'left' | 'right';
    label: string;
    disabled: boolean;
    onClick: () => void;
}) {
    const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
    return (
        <button
            type="button"
            aria-label={label}
            aria-disabled={disabled}
            disabled={disabled}
            onClick={onClick}
            className={classNames(
                'flex h-9 w-9 items-center justify-center rounded-full border border-v2-border transition-colors',
                disabled ? 'opacity-35' : 'hover:border-white'
            )}
        >
            <Icon className="h-3.5 w-3.5 fill-current text-white" />
        </button>
    );
}
