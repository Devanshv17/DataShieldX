npm run build;
if [ $? -ne 0 ]
then
echo "\n\nbuild failed!\n\n";
exit;
fi
rm -rf ~/trumio/DataShieldX-backend/student-entry/out;
mv ./out ~/trumio/DataShieldX-backend/student-entry/out;