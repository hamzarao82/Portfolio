import { cn } from '@/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-700/10',
        'dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/20',
        className
      )}
    >
      {children}
    </span>
  )
}
