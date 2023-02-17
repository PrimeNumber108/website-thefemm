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
scp -rP $port ./out/* "$server":/www/wwwroot/website-kasomo