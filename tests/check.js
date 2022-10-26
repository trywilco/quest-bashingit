#!/bin/sh

echo "id,last name,first name,email,price,country" > input.txt
echo "ff638a0a-0abc-4681-95c4-648953e65a9b,Sk,Ri,rskep7z@de.vu,100,US" >> input.txt
echo "0e686244-d4b3-4c92-ad29-ee72dd999114,Last,First,pmarmyon80@amazon.com,100,US" >> input.txt
echo "4632a06f-c142-4e64-a8cc-2102bbf1de30,Scala,Kitti,kscala81@boston.com,854,Indonesia" >> input.txt
echo "04bbd023-c977-45ec-98d1-047af2d63b11,Mapson,Amazon,emapson82@jiathis.com,150,Sweden" >> input.txt
echo "bd530b55-1d2e-480b-b924-fd91c358b0d3,MacDowall,Arnie,amacdowall83@Amazon.com,866,Australia" >> input.txt

./scripts/extract_names.sh input.txt output_names.txt

if ! grep -q Last output_names.txt; then
  exit 1;
fi


if ! grep -q First output_names.txt; then
  exit 1;
fi

if [ `cat output_names.txt | wc -l` -ne "2" ]; then
  exit 1;
fi

exit 0;
