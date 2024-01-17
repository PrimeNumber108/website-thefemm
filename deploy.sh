while getopts s:p: flag
do
    case "${flag}" in
        s) server=${OPTARG};;
        p) port=${OPTARG};;
    esac
done

if [ "$server" == "" ]
then
    echo "Missing server name"
    exit
fi

echo $server:$port
npm run export
# ssh $server << EOF
scp -r ./out/* "$server":/www/wwwroot/website-casami
# scp -r ./out/* "$server":/www/wwwroot/trendyze
# scp -r ./out/* "$server":/www/wwwroot/shop-zon
# EOF

