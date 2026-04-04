'use client'

import { Button } from '@/components/button'
import {
  FormFieldsGroup,
  FormField,
  ImageForm,
  handleImageChange,
} from '@/components/dashboard/form'
import { DialogFooter } from '@/components/dialog'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Select, SelectContent,SelectTrigger,SelectValue,SelectItem, SelectPortal, SelectItemText, SelectViewport } from '@radix-ui/react-select'

import { cn } from '@/lib/utils'
import { api, ResponseErrorType } from '@/services/api'
import { categoryType } from '@/types/category'
import { sportsItemType } from '@/types/sportsItem'
import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'


interface FormFieldsSportsItemProps {
  sportsItem?: sportsItemType | null
  readOnly?: boolean
  error?: ResponseErrorType | null
}

export default function FormFieldsSportsItem({
  sportsItem,
  readOnly,
  error,
}: FormFieldsSportsItemProps) {
  const { pending } = useFormStatus()
  const [updateImage, setUpdateImage] = useState<string | undefined>()
  const [categories, setCategories] = useState<categoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<categoryType | null>(sportsItem?.category ?? null);

  useEffect(()=>{
  
      async function getCategories(){
        const {response,error} = await api('GET', '/category')
  
        if(response){
          setCategories(response as categoryType[]);
        }else{
          console.error(error?.message);
        }
      }
  
      getCategories();
  },[])

  useEffect(() => {
    if (sportsItem?.category) {
      setSelectedCategory(sportsItem.category)
    }
  }, [sportsItem])
    

  return (
    <>
      <FormFieldsGroup>
        {sportsItem && (<Input defaultValue={sportsItem.id} type="text" name="id" hidden />)}

  
        <FormField>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            placeholder="Nome do produto"
            defaultValue={sportsItem?.name}
            minLength={3}
            required
            readOnly={readOnly}
          />
        </FormField>

  
        <FormField>
          <Label htmlFor="preco">Preço</Label>
          <Input
            id="preco"
            name="preco"
            type="number"
            placeholder="0.00"
            defaultValue={sportsItem?.preco}
            min={0.01}
            step="0.01"
            required
            readOnly={readOnly}
          />
        </FormField>

  
        <FormField>
          <Label htmlFor="ano">Ano</Label>
          <Input
            id="ano"
            name="ano"
            type="number"
            placeholder="2024"
            defaultValue={sportsItem?.ano}
            min={1}
            required
            readOnly={readOnly}
          />
        </FormField>

    
        <FormField>
          <Label htmlFor="quantidade">Quantidade</Label>
          <Input
            id="quantidade"
            name="quantidade"
            type="number"
            defaultValue={sportsItem?.quantidade}
            min={1}
            required
            readOnly={readOnly}
          />
        </FormField>

  
        <FormField>
          <Label>Categoria</Label>

          <Select
            value={selectedCategory ? String(selectedCategory.id) : ""}
            onValueChange={(value) => {
              const category = categories.find(
                (cat) => String(cat.id) === value
              )
              setSelectedCategory(category ?? null)
            }}
            disabled={readOnly}>

            <SelectTrigger
              style={{
                width: '100%',
                backgroundColor: 'rgba(235, 240, 244)',
                borderRadius: '6px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                padding: '8px 12px',
              }}>
              <SelectValue placeholder="Selecione uma categoria" />
            </SelectTrigger>

            
            <SelectPortal>
              <SelectContent
                position="popper"
                side="bottom"
                align="start"
                sideOffset={4}
                alignOffset={0}
                 style={{
                  zIndex: 50,
                  backgroundColor: 'rgba(235, 240, 244)',
                  borderRadius: '6px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  minWidth: 'var(--radix-select-trigger-width)',
                }}>
                <SelectViewport className="p-1">
                  {categories.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                        style={{
                      padding: '4px 8px', 
                      cursor: 'pointer',
                      borderRadius: '4px',
                    }}>
                      <SelectItemText>
                        {category.name}
                      </SelectItemText>
                    </SelectItem>
                  ))}
                </SelectViewport>
              </SelectContent>
            </SelectPortal>
          </Select>

          <Input
            type="hidden"
            name="category_id"
            value={selectedCategory?.id ?? ''}
          />
        </FormField>

        <FormField>
          <Label htmlFor="imagem">Imagem</Label>

          <Input
            id="imagem"
            name="imagem"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setUpdateImage)}
            disabled={readOnly}
          />

          {(updateImage || sportsItem?.imagem) && (
            <ImageForm
              src={updateImage || sportsItem?.imagem}
              alt="Preview"
            />
          )}
        </FormField>
      </FormFieldsGroup>

      <DialogFooter className={cn({ hidden: readOnly })}>
        <Button type="submit" pending={pending}>
          Salvar
        </Button>
      </DialogFooter>
    </>
  )
}

