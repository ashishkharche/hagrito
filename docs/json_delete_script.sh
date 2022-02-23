for directory in $(find . -maxdepth 40 -type d)
do
    # if directory name is guides, then ignore the code in if
    if [[ ${directory##*/} != "guides" && ${directory##*/} != "tech-support" && ${directory##*/} != "." && ${directory##*/} != "notes" ]]
    then
        echo "DIRECTORY ##: ${directory##*/}"
        find ${directory##*/} -name "*_category_.json" -type f -delete
    fi
done

[bash - Exclude a sub-directory using find - Stack Overflow](https://stackoverflow.com/questions/13460482/exclude-a-sub-directory-using-find)