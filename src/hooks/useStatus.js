export default function useStatus(status) {
    switch (status) {
        case 'success':
            return {
                title: 'انجام شده',
                code: 'success',
                color: 'bg-green-400'
            };

        case 'inprogress':
            return {
                title: 'در حال انجام',
                code: 'inprogress',
                color: 'bg-amber-400'
            };

        case 'canceled':
            return {
                title: 'لغو شده',
                code: 'canceled',
                color: 'bg-slate-400'
            };

        default:
            return '';
    }
}